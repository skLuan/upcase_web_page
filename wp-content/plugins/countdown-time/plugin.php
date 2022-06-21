<?php
/**
 * Plugin Name: Countdown Time
 * Description: Display your events date into a timer to your visitor with countdown time block
 * Version: 1.0.9
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: countdown-time
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'CTB_PLUGIN_VERSION', 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.9' );
define( 'CTB_ASSETS_DIR', plugin_dir_url( __FILE__ ) . 'assets/' );

// Generate Styles
class CTBStyleGenerator {
    public static $styles = [];
    public static function addStyle( $selector, $styles ){
        if( array_key_exists( $selector, self::$styles ) ){
           self::$styles[$selector] = wp_parse_args( self::$styles[$selector], $styles );
        }else { self::$styles[$selector] = $styles; }
    }
    public static function renderStyle(){
        $output = '';
        foreach( self::$styles as $selector => $style ){
            $new = '';
            foreach( $style as $property => $value ){
                if( $value == '' ){ $new .= $property; }else { $new .= " $property: $value;"; }
            }
            $output .= "$selector { $new }";
        }
        return $output;
    }
}

// Countdown Time
class CTBCountdownTimeBlock{
    function __construct(){
        add_action( 'init', [$this, 'onInit'] );
    }

    function onInit() {
        wp_register_style( 'ctb-countdown-time-editor-style', plugins_url( 'dist/editor.css', __FILE__ ), [ 'wp-edit-blocks' ], CTB_PLUGIN_VERSION ); // Backend Style
        wp_register_style( 'ctb-countdown-time-style', plugins_url( 'dist/style.css', __FILE__ ), [ 'wp-editor' ], CTB_PLUGIN_VERSION ); // Frontend Style

        register_block_type( __DIR__, [
            'editor_style'      => 'ctb-countdown-time-editor-style',
            'style'             => 'ctb-countdown-time-style',
            'render_callback'   => [$this, 'render']
        ] ); // Register Block
        
        wp_set_script_translations( 'ctb-countdown-time-editor-script', 'countdown-time', plugin_dir_path( __FILE__ ) . 'languages' ); // Translate
    }

    function render( $attributes ){
        extract( $attributes );

        $countdownStyle = new CTBStyleGenerator(); // Generate Styles
        $countdownStyle::addStyle( "#ctbCountdownTime-$cId", [
            'align-items' => $alignment,
            'justify-content' => $alignment
        ] );
        $countdownStyle::addStyle( "#ctbCountdownTime-$cId .countdownItems", [
            'width' => '0px' === $width || '0%' === $width || '0em' === $width ? 'auto' : $width,
            $background['styles'] ?? 'background-color: #0000;' => '',
            'padding' => $padding['styles'] ?? '10px 15px',
            'box-shadow' => $shadow['styles'] ?? 'none',
            'justify-content' => $boxPosition
        ] );
        $countdownStyle::addStyle( "#ctbCountdownTime-$cId .countdownItems .countdownItem", [
            $boxBG['styles'] ?? 'background-image: linear-gradient(135deg, #4527a4, #8344c5);' => '',
            'width' => $boxWidth,
            'height' => $boxHeight,
            'margin-left' => "calc( $boxSpace / 2 )",
            'margin-right' => "calc( $boxSpace / 2 )",
            $boxBorder['styles'] ?? 'border-radius: 5%;' => '',
            'box-shadow' => $boxShadow['styles'] ?? '0 0 0 0 #0000'
        ] );
        $countdownStyle::addStyle( "#ctbCountdownTime-$cId .countdownItems .separator::before", [
            'content' => "'$sepType'",
            'font-size' => $sepSize . 'px',
            'color' => $sepColor
        ] );
        $countdownStyle::addStyle( "#ctbCountdownTime-$cId .countdownItems .countdownItem .digit", [
            'color' => $digitColor,
            $digitTypo['styles'] ?? 'font-size: 48px;' => ''
        ] );
        $countdownStyle::addStyle( "#ctbCountdownTime-$cId .countdownItems .countdownItem .label", [
            'color' => $labelColor,
            $labelTypo['styles'] ?? 'font-size: 18px;' => ''
        ] );

        $boxClass = $boxIsInline ? 'inline' : '';

        ob_start(); ?>
        <div class='wp-block-ctb-countdown-time <?php echo 'align' . esc_attr( $align ); ?>' id='ctbCountdownTime-<?php echo esc_attr( $cId ) ?>' data-date="<?php echo esc_attr( wp_json_encode( [ 'destDate' => $destDate ] ) ); ?>">
            <style>
                <?php echo !empty( $digitTypo['googleFontLink'] ) ? "@import url(". esc_url( $digitTypo['googleFontLink'] ) .");" : ''; ?>
                <?php echo !empty( $labelTypo['googleFontLink'] ) ? "@import url(". esc_url( $labelTypo['googleFontLink'] ) .");" : ''; ?>
                <?php echo wp_kses( $countdownStyle::renderStyle(), [] ); ?>
                @media screen and ( max-width: 575px ) { #ctbCountdownTime-<?php echo esc_html( $cId ); ?> .countdownItems .countdownItem{
                    margin-top: calc( <?php echo esc_html( $boxSpace ); ?> / 2 ); margin-bottom: calc( <?php echo esc_html( $boxSpace ); ?> / 2 );
                } }
            </style>

            <div class='countdownItems'>
                <?php $this->box( $isDays, "countdownDays $boxClass", $isLabels, $daysLabel ); ?>
                <?php echo $isSep && $isDays && ( $isHours || $isMinutes || $isSeconds ) ? "<span class='separator'></span>" : ''; ?>
                <?php $this->box( $isHours, "countdownHours $boxClass", $isLabels, $hoursLabel ); ?>
                <?php echo $isSep && $isHours && ( $isMinutes || $isSeconds ) ? "<span class='separator'></span>" : ''; ?>
                <?php $this->box( $isMinutes, "countdownMinutes $boxClass", $isLabels, $minutesLabel ); ?>
                <?php echo $isSep && $isMinutes && $isSeconds ? "<span class='separator'></span>" : ''; ?>
                <?php $this->box( $isSeconds, "countdownSeconds $boxClass", $isLabels, $secondsLabel ); ?>
            </div>
        </div>

        <?php $countdownStyle::$styles = []; // Empty styles
        return ob_get_clean();
    } // Render

    function box( $is, $boxClass, $isLabels, $label ){
        if( $is ){ ?><div class='countdownItem <?php echo esc_attr( $boxClass ) ?>'>
            <span class='digit'>00</span> 
            <?php echo $isLabels ? "<span class='label'>". wp_kses_post( $label ) ."</span>" : ''; ?>
        </div><?php }
    } // Box
}
new CTBCountdownTimeBlock;