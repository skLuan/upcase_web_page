/**
 * Post Type Builder - Featured Image
 * 
 * @since 2.3.0
 */

import PortoStyleOptionsControl, {portoGenerateStyleOptionsCSS} from '../../../../shortcodes/assets/blocks/controls/style-options';
import {portoAddHelperClasses} from '../../../../shortcodes/assets/blocks/controls/editor-extra-classes';

( function ( wpI18n, wpBlocks, wpBlockEditor, wpComponents ) {
    "use strict";

    const __ = wpI18n.__,
        registerBlockType = wpBlocks.registerBlockType,
        InspectorControls = wpBlockEditor.InspectorControls,
        InnerBlocks = wpBlockEditor.InnerBlocks,
        SelectControl = wpComponents.SelectControl,
        TextControl = wpComponents.TextControl,
        ToggleControl = wpComponents.ToggleControl,
        Disabled = wpComponents.Disabled,
        PanelBody = wpComponents.PanelBody,
        ColorPicker = wpComponents.ColorPicker,
        ServerSideRender = wp.serverSideRender,
        UnitControl = wp.components.__experimentalUnitControl,
        useEffect = wp.element.useEffect;

    const PortoTBImage = function ( { attributes, setAttributes, name, clientId } ) {

        useEffect(
            () => {
                if ( ! attributes.el_class || -1 !== porto_tb_ids.indexOf( attributes.el_class ) ) { // new or just cloned
                    const new_cls = 'porto-tb-featured-image-' + Math.ceil( Math.random() * 10000 );
                    attributes.el_class = new_cls;
                    setAttributes( { el_class: new_cls } );
                }
                porto_tb_ids.push( attributes.el_class );

                return () => {
                    const arr_index = porto_tb_ids.indexOf( attributes.el_class );
                    if ( -1 !== arr_index ) {
                        porto_tb_ids.splice( arr_index, 1 );
                    }
                }
            },
            [],
        );

        let attrs = { image_size: attributes.image_size, el_class: attributes.el_class, image_type: attributes.image_type, show_badges: attributes.show_badges, hover_effect: attributes.hover_effect, className: attributes.className };
        if ( porto_content_type ) {
            attrs.content_type = porto_content_type;
            if ( porto_content_type_value ) {
                attrs.content_type_value = porto_content_type_value;
            }
        }

        const style_options = Object.assign( {}, attributes.style_options ),
            hover_padding = Object.assign( {}, attributes.hover_padding );
        let selectorCls = 'porto-tb-featured-image';
        if ( attributes.el_class ) {
            selectorCls = attributes.el_class;
        }

        let internalStyle = portoGenerateStyleOptionsCSS( style_options, selectorCls );
        if ( attributes.hover_bgcolor || hover_padding || attributes.hover_halign || attributes.hover_valign ) {
            internalStyle += '.wp-block[data-type="porto-tb/porto-featured-image"] > .block-editor-inner-blocks > .block-editor-block-list__layout {';
            if ( attributes.hover_bgcolor ) {
                internalStyle += 'background-color:' + attributes.hover_bgcolor + ';';
            }
            if ( hover_padding ) {
                if ( hover_padding.top ) {
                    internalStyle += 'padding-top:' + hover_padding.top + ';';
                }
                if ( hover_padding.right ) {
                    internalStyle += 'padding-right:' + hover_padding.right + ';';
                }
                if ( hover_padding.bottom ) {
                    internalStyle += 'padding-bottom:' + hover_padding.bottom + ';';
                }
                if ( hover_padding.left ) {
                    internalStyle += 'padding-left:' + hover_padding.left + ';';
                }
            }
            if ( attributes.hover_halign ) {
                internalStyle += 'align-items:' + attributes.hover_halign + ';';
            }
            if ( attributes.hover_valign ) {
                internalStyle += 'justify-content:' + attributes.hover_valign + ';';
            }
            internalStyle += '}';
        }

        let image_hover_effects = [
            { label: __( 'None', 'porto-functionality' ), value: '' },
            { label: __( 'Zoom In', 'porto-functionality' ), value: 'zoom' },
            { label: __( 'Effect 1', 'porto-functionality' ), value: 'effect-1' },
            { label: __( 'Effect 2', 'porto-functionality' ), value: 'effect-2' },
            { label: __( 'Effect 3', 'porto-functionality' ), value: 'effect-3' },
            { label: __( 'Effect 4', 'porto-functionality' ), value: 'effect-4' },
        ];
        if ( ! attributes.image_type ) {
            image_hover_effects.push( { label: __( '3D Effect', 'porto-functionality' ), value: 'hover3d' } );
            image_hover_effects.push( { label: __( '3D Effect & Zoom In', 'porto-functionality' ), value: 'hover3d-zoom' } );
        }

        // add helper classes to parent block element
        if ( attributes.className ) {
            portoAddHelperClasses( attributes.className, clientId );
        }

        return (
            <>
                <InspectorControls key="inspector">
                    <SelectControl
                        label={ __( 'Image Type', 'porto-functionality' ) }
                        value={ attributes.image_type }
                        options={ [
                            { label: __( 'Single image', 'porto-functionality' ), value: '' },
                            { label: __( 'Show secondary image on hover', 'porto-functionality' ), value: 'hover' },
                            { label: __( 'Slider', 'porto-functionality' ), value: 'slider' },
                            { label: __( 'Video & Image', 'porto-functionality' ), value: 'video' },
                            { label: __( 'Grid Gallery', 'porto-functionality' ), value: 'gallery' }
                        ] }
                        onChange={ ( value ) => { setAttributes( { image_type: value } ); } }
                        help={ __( 'Please select the image type.', 'porto-functionality' ) }
                    />
                    { ( '' === attributes.image_type || 'slider' === attributes.image_type || 'gallery' === attributes.image_type ) && (
                        <SelectControl
                            label={ __( 'Image Hover Effect', 'porto-functionality' ) }
                            value={ attributes.hover_effect }
                            options={ image_hover_effects }
                            onChange={ ( value ) => { setAttributes( { hover_effect: value } ); } }
                        />
                    ) }
                    <ToggleControl
                        label={ __( 'Show Content on hover', 'porto-functionality' ) }
                        help={ __( 'Please choose to show or hide the inner blocks on hover.', 'porto-functionality' ) }
                        checked={ attributes.show_content_hover }
                        onChange={ ( value ) => { setAttributes( { show_content_hover: value } ); } }
                    />
                    <ToggleControl
                        label={ __( 'Show Product Badges', 'porto-functionality' ) }
                        help={ __( 'Please choose to show or hide the badges such as hot, sale, new, etc. This applies to only products.', 'porto-functionality' ) }
                        checked={ attributes.show_badges }
                        onChange={ ( value ) => { setAttributes( { show_badges: value } ); } }
                    />
                    <SelectControl
                        label={ __( 'Add Link to Image', 'porto-functionality' ) }
                        value={ attributes.add_link }
                        options={ [ { 'label': __( 'Yes', 'porto-functionality' ), 'value': 'yes' }, { 'label': __( 'No', 'porto-functionality' ), 'value': 'no' }, { 'label': __( 'Custom Link', 'porto-functionality' ), 'value': 'custom' } ] }
                        onChange={ ( value ) => { setAttributes( { add_link: value } ); } }
                    />
                    <ToggleControl
                        label={ __( 'Image Lightbox', 'porto-functionality' ) }
                        help={ __( 'Please choose to enable or disable image lightbox.', 'porto-functionality' ) }
                        checked={ attributes.zoom }
                        onChange={ ( value ) => { setAttributes( { zoom: value } ); } }
                    />
                    { 'custom' === attributes.add_link && (
                        <TextControl
                            label={ __( 'Custom Link', 'porto-functionality' ) }
                            value={ attributes.custom_url }
                            onChange={ ( value ) => { setAttributes( { custom_url: value } ); } }
                            help={ __( 'Please input custom url.', 'porto-functionality' ) }
                        />
                    ) }
                    { 'custom' === attributes.add_link && attributes.custom_url && (
                        <SelectControl
                            label={ __( 'Link Target', 'porto-functionality' ) }
                            value={ attributes.link_target }
                            options={ [ { 'label': '_self', 'value': '' }, { 'label': '_blank', 'value': '_blank' } ] }
                            onChange={ ( value ) => { setAttributes( { link_target: value } ); } }
                        />
                    ) }
                    <SelectControl
                        label={ __( 'Image Size', 'porto-functionality' ) }
                        value={ attributes.image_size }
                        options={ porto_block_vars.image_sizes }
                        onChange={ ( value ) => { setAttributes( { image_size: value } ); } }
                    />
                    <PanelBody title={ __( 'Hover Content', 'porto-functionality' ) } initialOpen={ false }>
                        <SelectControl
                            label={ __( 'Horizontal Layout', 'porto-functionality' ) }
                            value={ attributes.hover_halign }
                            options={ [ { 'label': __( 'Default', 'porto-functionality' ), 'value': '' }, { 'label': __( 'Left', 'porto-functionality' ), 'value': 'flex-start' }, { 'label': __( 'Center', 'porto-functionality' ), 'value': 'center' }, { 'label': __( 'Right', 'porto-functionality' ), 'value': 'flex-end' } ] }
                            onChange={ ( value ) => { setAttributes( { hover_halign: value } ); } }
                        />
                        <SelectControl
                            label={ __( 'Vertical Layout', 'porto-functionality' ) }
                            value={ attributes.hover_valign }
                            options={ [ { 'label': __( 'None', 'porto-functionality' ), 'value': '' }, { 'label': __( 'Top', 'porto-functionality' ), 'value': 'flex-start' }, { 'label': __( 'Middle', 'porto-functionality' ), 'value': 'center' }, { 'label': __( 'Bottom', 'porto-functionality' ), 'value': 'flex-end' } ] }
                            onChange={ ( value ) => { setAttributes( { hover_valign: value } ); } }
                        />
                        <SelectControl
                            label={ __( 'Hover Effect', 'porto-functionality' ) }
                            value={ attributes.hover_start_effect }
                            options={ [ { 'label': __( 'None', 'porto-functionality' ), 'value': '' }, { 'label': __( 'Fade In', 'porto-functionality' ), 'value': 'fadein' }, { 'label': __( 'Translate In Left', 'porto-functionality' ), 'value': 'translateleft' }, { 'label': __( 'Translate In Top', 'porto-functionality' ), 'value': 'translatetop' }, { 'label': __( 'Translate In Bottom', 'porto-functionality' ), 'value': 'translatebottom' }, { 'label': __( 'Content Translate In Bottom', 'porto-functionality' ), 'value': 'contenttranslatebottom' }, { label: __( 'Hoverdir', 'porto-functionality' ), value: 'hoverdir' } ] }
                            onChange={ ( value ) => { setAttributes( { hover_start_effect: value } ); } }
                        />
                        <label>
                            { __( 'Background Color', 'porto-functionality' ) }
                        </label>
                        <ColorPicker
                            label={ __( 'Background Color', 'porto-functionality' ) }
                            color={ attributes.hover_bgcolor }
                            onChangeComplete={ ( value ) => {
                                setAttributes( { hover_bgcolor: 'rgba(' + value.rgb.r + ',' + value.rgb.g + ',' + value.rgb.b + ',' + value.rgb.a + ')' } );
                            } }
                        />
                        <button className="components-button components-range-control__reset is-secondary is-small" onClick={ ( e ) => {
                            setAttributes( { hover_bgcolor: undefined } );
                        } } style={ { margin: '-10px 0 10px 3px' } }>
                            { __( 'Reset', 'porto-functionality' ) }
                        </button>
                        <div className="porto-typography-control porto-dimension-control">
                            <h3 className="components-base-control" style={ { marginBottom: 15 } }>
                                { __( 'Padding', 'porto-functionality' ) }
                            </h3>
                            <div></div>
                            <UnitControl
                                label={ __( 'Top', 'porto-functionality' ) }
                                value={ hover_padding.top }
                                onChange={ ( value ) => {
                                    hover_padding.top = value;
                                    setAttributes( { hover_padding: hover_padding } );
                                } }
                            />
                            <UnitControl
                                label={ __( 'Right', 'porto-functionality' ) }
                                value={ hover_padding.right }
                                onChange={ ( value ) => {
                                    hover_padding.right = value;
                                    setAttributes( { hover_padding: hover_padding } );
                                } }
                            />
                            <UnitControl
                                label={ __( 'Bottom', 'porto-functionality' ) }
                                value={ hover_padding.bottom }
                                onChange={ ( value ) => {
                                    hover_padding.bottom = value;
                                    setAttributes( { hover_padding: hover_padding } );
                                } }
                            />
                            <UnitControl
                                label={ __( 'Left', 'porto-functionality' ) }
                                value={ hover_padding.left }
                                onChange={ ( value ) => {
                                    hover_padding.left = value;
                                    setAttributes( { hover_padding: hover_padding } );
                                } }
                            />
                        </div>
                    </PanelBody>
                    <PortoStyleOptionsControl
                        label={ __( 'Style Options', 'porto-functionality' ) }
                        value={ style_options }
                        options={ {} }
                        onChange={ ( value ) => { setAttributes( { style_options: value } ); } }
                    />
                </InspectorControls>
                <>
                    <Disabled>
                        <style>
                            { internalStyle }
                        </style>
                        <ServerSideRender
                            block={ name }
                            attributes={ attrs }
                        />
                    </Disabled>
                    { attributes.show_content_hover && (
                        <InnerBlocks
                            allowedBlocks={ [ 'porto/porto-heading', 'porto/porto-info-box', 'porto/porto-single-icon', 'porto/porto-button', 'porto/porto-section', 'porto-tb/porto-content', 'porto-tb/porto-woo-price', 'porto-tb/porto-woo-rating', 'porto-tb/porto-woo-stock', 'porto-tb/porto-woo-desc', 'porto-tb/porto-woo-buttons', 'porto-tb/porto-meta' ] }
                        />
                    ) }
                </>
            </>
        )
    }
    registerBlockType( 'porto-tb/porto-featured-image', {
        title: __( 'Featured Image', 'porto-functionality' ),
        icon: 'porto',
        category: 'porto-tb',
        keywords: [ 'type builder', 'mini', 'card', 'post', 'attachment', 'thumbnail' ],
        attributes: {
            image_type: {
                type: 'string',
                default: '',
            },
            hover_effect: {
                type: 'string',
                default: '',
            },
            show_content_hover: {
                type: 'boolean',
            },
            show_badges: {
                type: 'boolean',
            },
            zoom: {
                type: 'boolean',
            },
            content_type: {
                type: 'string',
            },
            content_type_value: {
                type: 'string',
            },
            add_link: {
                type: 'string',
                default: 'yes',
            },
            custom_url: {
                type: 'string',
            },
            link_target: {
                type: 'string',
            },
            image_size: {
                type: 'string',
            },
            hover_halign: {
                type: 'string',
            },
            hover_valign: {
                type: 'string',
            },
            hover_start_effect: {
                type: 'string',
            },
            hover_bgcolor: {
                type: 'string',
            },
            hover_padding: {
                type: 'object',
                default: {},
            },
            style_options: {
                type: 'object',
            },
            el_class: {
                type: 'string',
            }
        },
        edit: PortoTBImage,
        save: function ( props ) {
            return (
                <InnerBlocks.Content />
            );
        }
    } );
} )( wp.i18n, wp.blocks, wp.blockEditor, wp.components );