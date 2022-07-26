const PortoStyleOptionsControl = function({
	label,
	value,
	options,
	onChange
}) {
	const __ = wp.i18n.__,
		TextControl = wp.components.TextControl,
		SelectControl = wp.components.SelectControl,
		UnitControl = wp.components.__experimentalUnitControl,
		RangeControl = wp.components.RangeControl,
		PanelBody = wp.components.PanelBody,
		ColorPalette = wp.components.ColorPalette,
		ColorPicker = wp.components.ColorPicker,
		IconButton = wp.components.IconButton,
		ToggleControl = wp.components.ToggleControl,
		MediaUpload = wp.blockEditor.MediaUpload;

	if ( ! value ) {
		value = {};
	}

	const marginEnabled = ! options || false !== options.margin,
		paddingEnabled = ! options || false !== options.padding,
		positionEnabled = ! options || false !== options.position,
		borderEnabled = ! options || false !== options.border,
		bgEnabled = ! options || false !== options.bg,
		visibilityEnabled = ! options || false !== options.visibility,
		boxShadowEnabled = ! options || false !== options.boxShadow;
	return (
		<>
			<PanelBody title={ label } initialOpen={ false }>
			{ bgEnabled && (
				<div className="porto-typography-control porto-dimension-control">
					<h3 className="components-base-control" style={ { marginBottom: 15 } }>
						{ __( 'Background', 'porto-functionality' ) }
					</h3>
					<ColorPicker
						label={ __( 'Color', 'porto-functionality' ) }
						color={ value.bg && value.bg.color }
						onChangeComplete={ ( val ) => {
							if ( ! value.bg ) {
								value.bg = {};
							}
							value.bg.color = 'rgba(' + val.rgb.r + ',' + val.rgb.g + ',' + val.rgb.b + ',' + val.rgb.a + ')';
							onChange( value );
						} }
					/>
					<button className="components-button components-range-control__reset is-secondary is-small" onClick={ ( e ) => {
						value.bg.color = '';
						onChange( value );
					} } style={ { margin: '-10px 0 10px 3px' } }>
						{ __( 'Reset', 'porto-functionality' ) }
					</button>
					<MediaUpload
						allowedTypes={ [ 'image' ] }
						value={ value.bg && value.bg.img_id }
						onSelect={ ( image ) => {
							if ( ! value.bg ) {
								value.bg = {};
							}
							value.bg.img_url = image.url;
							value.bg.img_id = image.id;
							onChange( value );
						} }
						render={ ( _ref ) => {
							var open = _ref.open;
							return (
								<div>
									{ value.bg && value.bg.img_id && (
										<img src={ value.bg.img_url } width="100" />
									) }
									<IconButton
										className="components-toolbar__control"
										label={ __( 'Change image', 'porto-functionality' ) }
										icon="edit"
										onClick={ open }
									/>
									<IconButton
										className="components-toolbar__control"
										label={ __( 'Remove image', 'porto-functionality' ) }
										icon="no"
										onClick={ () => {
											if ( ! value.bg ) {
												value.bg = {};
											}
											value.bg.img_url = undefined;
											value.bg.img_id = undefined;
											onChange( value );
										} }
									/>
								</div>
							);
						} }
					/>
					{ value.bg && value.bg.img_id && (
						<SelectControl
							label={ __( 'Position', 'porto-functionality' ) }
							value={ value.bg && value.bg.position }
							options={ [ { label: __( 'Default', 'porto-functionality' ), value: '' }, { label: __( 'Center Center', 'porto-functionality' ), value: 'center center' }, { label: __( 'Center Left', 'porto-functionality' ), value: 'center left' }, { label: __( 'Center Right', 'porto-functionality' ), value: 'center right' }, { label: __( 'Top Center', 'porto-functionality' ), value: 'top center' }, { label: __( 'Top Left', 'porto-functionality' ), value: 'top left' }, { label: __( 'Top Right', 'porto-functionality' ), value: 'top right' }, { label: __( 'Bottom Center', 'porto-functionality' ), value: 'bottom center' }, { label: __( 'Bottom Left', 'porto-functionality' ), value: 'bottom left' }, { label: __( 'Bottom Right', 'porto-functionality' ), value: 'bottom right' } ] }
							onChange={ ( val ) => {
								if ( ! value.bg ) {
									value.bg = {};
								}
								value.bg.position = val;
								onChange( value );
							} }
						/>
					) }
					{ value.bg && value.bg.img_id && (
						<SelectControl
							label={ __( 'Attachment', 'porto-functionality' ) }
							value={ value.bg && value.bg.attachment }
							options={ [ { label: __( 'Default', 'porto-functionality' ), value: '' }, { label: __( 'Scroll', 'porto-functionality' ), value: 'scroll' }, { label: __( 'Fixed' ), value: 'fixed' } ] }
							onChange={ ( val ) => {
								if ( ! value.bg ) {
									value.bg = {};
								}
								value.bg.attachment = val;
								onChange( value );
							} }
						/>
					) }
					{ value.bg && value.bg.img_id && (
						<SelectControl
							label={ __( 'Repeat', 'porto-functionality' ) }
							value={ value.bg && value.bg.repeat }
							options={ [ { label: __( 'Default', 'porto-functionality' ), value: '' }, { label: __( 'No-repeat', 'porto-functionality' ), value: 'no-repeat' }, { label: __( 'Repeat', 'porto-functionality' ), value: 'repeat' }, { label: __( 'Repeat-x', 'porto-functionality' ), value: 'repeat-x' }, { label: __( 'Repeat-y', 'porto-functionality' ), value: 'repeat-y' } ] }
							onChange={ ( val ) => {
								if ( ! value.bg ) {
									value.bg = {};
								}
								value.bg.repeat = val;
								onChange( value );
							} }
						/>
					) }
					{ value.bg && value.bg.img_id && (
						<SelectControl
							label={ __( 'Size', 'porto-functionality' ) }
							value={ value.bg && value.bg.size }
							options={ [ { label: __( 'Default', 'porto-functionality' ), value: '' }, { label: __( 'Auto', 'porto-functionality' ), value: 'auto' }, { label: __( 'Cover', 'porto-functionality' ), value: 'cover' }, { label: __( 'Contain', 'porto-functionality' ), value: 'contain' } ] }
							onChange={ ( val ) => {
								if ( ! value.bg ) {
									value.bg = {};
								}
								value.bg.size = val;
								onChange( value );
							} }
						/>
					) }
				</div>
			) }
			{ borderEnabled && (
				<div className="porto-typography-control porto-dimension-control">
					<h3 className="components-base-control" style={ { marginBottom: 15 } }>
						{ __( 'Border', 'porto-functionality' ) }
					</h3>
					<SelectControl
						label={ __( 'Style', 'porto-functionality' ) }
						value={ value.border && value.border.style }
						options={ [ { label: __( 'None', 'porto-functionality' ), value: '' }, { label: __( 'Solid', 'porto-functionality' ), value: 'solid' }, { label: __( 'Double', 'porto-functionality' ), value: 'double' }, { label: __( 'Dotted', 'porto-functionality' ), value: 'dotted' }, { label: __( 'Dashed', 'porto-functionality' ), value: 'dashed' }, { label: __( 'Groove', 'porto-functionality' ), value: 'groove' } ] }
						onChange={ ( val ) => {
							if ( ! value.border ) {
								value.border = {};
							}
							value.border.style = val;
							onChange( value );
						} }
					/>
					<div style={ { display: 'flex', flexWrap: 'wrap' } }>
						<label style={ { width: '100%', marginBottom: 5 } }>
							{ __( 'Width', 'porto-functionality' ) }
						</label>
						<UnitControl
							label={ __( 'Top', 'porto-functionality' ) }
							value={ value.border && value.border.top }
							onChange={ ( val ) => {
								if ( ! value.border ) {
									value.border = {};
								}
								value.border.top = val;
								onChange( value );
							} }
						/>
						<UnitControl
							label={ __( 'Right', 'porto-functionality' ) }
							value={ value.border && value.border.right }
							onChange={ ( val ) => {
								if ( ! value.border ) {
									value.border = {};
								}
								value.border.right = val;
								onChange( value );
							} }
						/>
						<UnitControl
							label={ __( 'Bottom', 'porto-functionality' ) }
							value={ value.border && value.border.bottom }
							onChange={ ( val ) => {
								if ( ! value.border ) {
									value.border = {};
								}
								value.border.bottom = val;
								onChange( value );
							} }
						/>
						<UnitControl
							label={ __( 'Left', 'porto-functionality' ) }
							value={ value.border && value.border.left }
							onChange={ ( val ) => {
								if ( ! value.border ) {
									value.border = {};
								}
								value.border.left = val;
								onChange( value );
							} }
						/>
						<label style={ { width: '100%', marginTop: 10, marginBottom: 5 } }>
							{ __( 'Color', 'porto-functionality' ) }
							<span className="porto-color-show" style={ { backgroundColor: value.border && value.border.color } }>
						</span>
						</label>
						<ColorPalette
							label={ __( 'Color', 'porto-functionality' ) }
							value={ value.border && value.border.color }
							onChange={ ( val ) => {
								if ( ! value.border ) {
									value.border = {};
								}
								value.border.color = val;
								onChange( value );
							} }
						/>
					</div>

					<label style={ { width: '100%', marginBottom: 5 } }>
						{ __( 'Border Radius', 'porto-functionality' ) }
					</label>
					<UnitControl
						label={ __( 'Top', 'porto-functionality' ) }
						value={ value.borderRadius && value.borderRadius.top }
						onChange={ ( val ) => {
							if ( ! value.borderRadius ) {
								value.borderRadius = {};
							}
							value.borderRadius.top = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'Right', 'porto-functionality' ) }
						value={ value.borderRadius && value.borderRadius.right }
						onChange={ ( val ) => {
							if ( ! value.borderRadius ) {
								value.borderRadius = {};
							}
							value.borderRadius.right = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'Bottom', 'porto-functionality' ) }
						value={ value.borderRadius && value.borderRadius.bottom }
						onChange={ ( val ) => {
							if ( ! value.borderRadius ) {
								value.borderRadius = {};
							}
							value.borderRadius.bottom = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'Left', 'porto-functionality' ) }
						value={ value.borderRadius && value.borderRadius.left }
						onChange={ ( val ) => {
							if ( ! value.borderRadius ) {
								value.borderRadius = {};
							}
							value.borderRadius.left = val;
							onChange( value );
						} }
					/>
				</div>
			) }
			{ marginEnabled && (
				<div className="porto-typography-control porto-dimension-control">
					<h3 className="components-base-control" style={ { marginBottom: 15 } }>
						{ __( 'Margin', 'porto-functionality' ) }
					</h3>
					<div></div>
					<UnitControl
						label={ __( 'Top', 'porto-functionality' ) }
						value={ value.margin && value.margin.top }
						onChange={ ( val ) => {
							if ( ! value.margin ) {
								value.margin = {};
							}
							value.margin.top = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'Right', 'porto-functionality' ) }
						value={ value.margin && value.margin.right }
						onChange={ ( val ) => {
							if ( ! value.margin ) {
								value.margin = {};
							}
							value.margin.right = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'Bottom', 'porto-functionality' ) }
						value={ value.margin && value.margin.bottom }
						onChange={ ( val ) => {
							if ( ! value.margin ) {
								value.margin = {};
							}
							value.margin.bottom = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'Left', 'porto-functionality' ) }
						value={ value.margin && value.margin.left }
						onChange={ ( val ) => {
							if ( ! value.margin ) {
								value.margin = {};
							}
							value.margin.left = val;
							onChange( value );
						} }
					/>
				</div>
			) }
			{ paddingEnabled && (
				<div className="porto-typography-control porto-dimension-control">
					<h3 className="components-base-control" style={ { marginBottom: 15 } }>
						{ __( 'Padding', 'porto-functionality' ) }
					</h3>
					<div></div>
					<UnitControl
						label={ __( 'Top', 'porto-functionality' ) }
						value={ value.padding && value.padding.top }
						onChange={ ( val ) => {
							if ( ! value.padding ) {
								value.padding = {};
							}
							value.padding.top = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'Right', 'porto-functionality' ) }
						value={ value.padding && value.padding.right }
						onChange={ ( val ) => {
							if ( ! value.padding ) {
								value.padding = {};
							}
							value.padding.right = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'Bottom', 'porto-functionality' ) }
						value={ value.padding && value.padding.bottom }
						onChange={ ( val ) => {
							if ( ! value.padding ) {
								value.padding = {};
							}
							value.padding.bottom = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'Left', 'porto-functionality' ) }
						value={ value.padding && value.padding.left }
						onChange={ ( val ) => {
							if ( ! value.padding ) {
								value.padding = {};
							}
							value.padding.left = val;
							onChange( value );
						} }
					/>
				</div>
			) }
			{ positionEnabled && (
				<div className="porto-typography-control porto-dimension-control">
					<h3 className="components-base-control" style={ { marginBottom: 15 } }>
						{ __( 'Position', 'porto-functionality' ) }
					</h3>
					<SelectControl
						label={ __( 'Style', 'porto-functionality' ) }
						value={ value.position && value.position.style }
						options={ [ { label: __( 'Default', 'porto-functionality' ), value: '' }, { label: __( 'Static', 'porto-functionality' ), value: 'static' }, { label: __( 'Relative', 'porto-functionality' ), value: 'relative' }, { label: __( 'Absolute', 'porto-functionality' ), value: 'absolute' }, { label: __( 'Fixed', 'porto-functionality' ), value: 'fixed' }, { label: __( 'Sticky', 'porto-functionality' ), value: 'sticky' } ] }
						onChange={ ( val ) => {
							if ( ! value.position ) {
								value.position = {};
							}
							value.position.style = val;
							onChange( value );
						} }
					/>
					<RangeControl
						label={ __( 'Z-index', 'porto-functionality' ) }
						value={ value.position && typeof value.position.zindex != 'undefined' && value.position.zindex }
						min="-10"
						max="100"
						allowReset={ true }
						onChange={ ( val ) => {
							if ( ! value.position ) {
								value.position = {};
							}
							value.position.zindex = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'Top', 'porto-functionality' ) }
						value={ value.position && value.position.top }
						onChange={ ( val ) => {
							if ( ! value.position ) {
								value.position = {};
							}
							value.position.top = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'Right', 'porto-functionality' ) }
						value={ value.position && value.position.right }
						onChange={ ( val ) => {
							if ( ! value.position ) {
								value.position = {};
							}
							value.position.right = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'Bottom', 'porto-functionality' ) }
						value={ value.position && value.position.bottom }
						onChange={ ( val ) => {
							if ( ! value.position ) {
								value.position = {};
							}
							value.position.bottom = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'Left', 'porto-functionality' ) }
						value={ value.position && value.position.left }
						onChange={ ( val ) => {
							if ( ! value.position ) {
								value.position = {};
							}
							value.position.left = val;
							onChange( value );
						} }
					/>
					<div className="mb-3" />
					<UnitControl
						label={ __( 'TranslateX', 'porto-functionality' ) }
						value={ value.position && value.position.translatex }
						onChange={ ( val ) => {
							if ( ! value.position ) {
								value.position = {};
							}
							value.position.translatex = val;
							onChange( value );
						} }
					/>
					<UnitControl
						label={ __( 'TranslateY', 'porto-functionality' ) }
						value={ value.position && value.position.translatey }
						onChange={ ( val ) => {
							if ( ! value.position ) {
								value.position = {};
							}
							value.position.translatey = val;
							onChange( value );
						} }
					/>
					<div className="mb-3" />
					<SelectControl
						label={ __( 'Width', 'porto-functionality' ) }
						value={ value.position && value.position.width }
						options={ [ { label: __( 'Default', 'porto-functionality' ), value: '' }, { label: __( 'Full Width (100%)', 'porto-functionality' ), value: '100%' }, { label: __( 'Inline (auto)', 'porto-functionality' ), value: 'auto' }, { label: __( 'Fit Content', 'porto-functionality' ), value: 'fit-content' } ] }
						onChange={ ( val ) => {
							if ( ! value.position ) {
								value.position = {};
							}
							value.position.width = val;
							onChange( value );
						} }
					/>
					<SelectControl
						label={ __( 'Horizontal Align', 'porto-functionality' ) }
						help={ __( 'This only works in flex container.', 'porto-functionality' ) }
						value={ value.position && value.position.halign }
						options={ [ { label: __( 'Default', 'porto-functionality' ), value: '' }, { label: __( 'Center', 'porto-functionality' ), value: 'x' }, { label: __( 'Left', 'porto-functionality' ), value: 'r' }, { label: __( 'Right', 'porto-functionality' ), value: 'l' } ] }
						onChange={ ( val ) => {
							if ( ! value.position ) {
								value.position = {};
							}
							value.position.halign = val;
							onChange( value );
						} }
					/>
					<RangeControl
						label={ __( 'Opacity', 'porto-functionality' ) }
						value={ value.position && typeof value.position.opacity != 'undefined' && value.position.opacity }
						min="0"
						max="1"
						step="0.01"
						allowReset={ true }
						onChange={ ( val ) => {
							if ( ! value.position ) {
								value.position = {};
							}
							value.position.opacity = val;
							onChange( value );
						} }
					/>
				</div>
			) }
			{ boxShadowEnabled && (
				<div className="porto-typography-control porto-dimension-control">
					<h3 className="components-base-control" style={ { marginBottom: 15 } }>
						{ __( 'Box Shadow', 'porto-functionality' ) }
					</h3>
					<SelectControl
						label={ __( 'Type', 'porto-functionality' ) }
						value={ value.boxshadow && value.boxshadow.type }
						options={ [ { label: __( 'Outset', 'porto-functionality' ), value: '' }, { label: __( 'Inset', 'porto-functionality' ), value: 'inset' }, { label: __( 'None', 'porto-functionality' ), value: 'none' }, { label: __( 'Inherit', 'porto-functionality' ), value: 'inherit' } ] }
						onChange={ ( val ) => {
							if ( ! value.boxshadow ) {
								value.boxshadow = {};
							}
							value.boxshadow.type = val;
							onChange( value );
						} }
					/>
					<div className="mb-3" style={ { display: 'flex', flexWrap: 'wrap' } }>
						<UnitControl
							label={ __( 'X', 'porto-functionality' ) }
							value={ value.boxshadow && value.boxshadow.x }
							onChange={ ( val ) => {
								if ( ! value.boxshadow ) {
									value.boxshadow = {};
								}
								value.boxshadow.x = val;
								onChange( value );
							} }
						/>
						<UnitControl
							label={ __( 'Y', 'porto-functionality' ) }
							value={ value.boxshadow && value.boxshadow.y }
							onChange={ ( val ) => {
								if ( ! value.boxshadow ) {
									value.boxshadow = {};
								}
								value.boxshadow.y = val;
								onChange( value );
							} }
						/>
						<UnitControl
							label={ __( 'Blur', 'porto-functionality' ) }
							value={ value.boxshadow && value.boxshadow.blur }
							onChange={ ( val ) => {
								if ( ! value.boxshadow ) {
									value.boxshadow = {};
								}
								value.boxshadow.blur = val;
								onChange( value );
							} }
						/>
						<UnitControl
							label={ __( 'Spread', 'porto-functionality' ) }
							value={ value.boxshadow && value.boxshadow.spread }
							onChange={ ( val ) => {
								if ( ! value.boxshadow ) {
									value.boxshadow = {};
								}
								value.boxshadow.spread = val;
								onChange( value );
							} }
						/>
					</div>
					<ColorPicker
						label={ __( 'Color', 'porto-functionality' ) }
						color={ value.boxshadow && value.boxshadow.color }
						onChangeComplete={ ( val ) => {
							if ( ! value.boxshadow ) {
								value.boxshadow = {};
							}
							value.boxshadow.color = 'rgba(' + val.rgb.r + ',' + val.rgb.g + ',' + val.rgb.b + ',' + val.rgb.a + ')';
							onChange( value );
						} }
					/>
				</div>
			) }
			{ visibilityEnabled && (
				<div className="porto-typography-control porto-dimension-control">
					<h3 className="components-base-control" style={ { marginBottom: 15 } }>
						{ __( 'Visibility', 'porto-functionality' ) }
					</h3>
					<p className="help">{ __( 'Visibility will take effect only on live page.', 'porto-functionality' ) }</p>
					<ToggleControl
						label={ __( 'Hide On Large Desktop', 'porto-functionality' ) }
						checked={ value.hideXl }
						onChange={ ( val ) => {
							value.hideXl = val;
							onChange( value );
						} }
					/>
					<ToggleControl
						label={ __( 'Hide On Desktop', 'porto-functionality' ) }
						checked={ value.hideLg }
						onChange={ ( val ) => {
							value.hideLg = val;
							onChange( value );
						} }
					/>
					<ToggleControl
						label={ __( 'Hide On Tablet', 'porto-functionality' ) }
						checked={ value.hideMd }
						onChange={ ( val ) => {
							value.hideMd = val;
							onChange( value );
						} }
					/>
					<ToggleControl
						label={ __( 'Hide On Mobile', 'porto-functionality' ) }
						checked={ value.hideSm }
						onChange={ ( val ) => {
							value.hideSm = val;
							onChange( value );
						} }
					/>
				</div>
			) }
			</PanelBody>
			{ options && options.hoverOptions && (
				<PanelBody title={ __( 'Hover Style Options', 'porto-functionality' ) } initialOpen={ false }>
					<div className="porto-typography-control porto-dimension-control">
						<p style={ { marginBottom: 4, marginTop: 15 } }>
							{ __( 'Background Color', 'porto-functionality' ) }
						</p>
						<ColorPicker
							label={ __( 'Color', 'porto-functionality' ) }
							color={ value.hover && value.hover.bg }
							onChangeComplete={ ( val ) => {
								if ( ! value.hover ) {
									value.hover = {};
								}
								value.hover.bg = 'rgba(' + val.rgb.r + ',' + val.rgb.g + ',' + val.rgb.b + ',' + val.rgb.a + ')';
								onChange( value );
							} }
						/>
						<button className="components-button components-range-control__reset is-secondary is-small" onClick={ ( e ) => {
							value.bg.color = '';
							onChange( value );
						} } style={ { margin: '-10px 0 20px 3px' } }>
							{ __( 'Reset', 'porto-functionality' ) }
						</button>

						<p style={ { marginBottom: 4, width: '100%' } }>
							{ __( 'Text Color', 'porto-functionality' ) }
							<span className="porto-color-show" style={ { backgroundColor: value.hover && value.hover.color } }>
							</span>
						</p>
						<ColorPalette
							label={ __( 'Text Color', 'porto-functionality' ) }
							value={ value.hover && value.hover.color }
							onChange={ ( val ) => {
								if ( ! value.hover ) {
									value.hover = {};
								}
								value.hover.color = val;
								onChange( value );
							} }
						/>
						<SelectControl
							label={ __( 'Border Style', 'porto-functionality' ) }
							value={ value.hover && value.hover.border_style }
							options={ [ { label: __( 'None', 'porto-functionality' ), value: '' }, { label: __( 'Solid', 'porto-functionality' ), value: 'solid' }, { label: __( 'Double', 'porto-functionality' ), value: 'double' }, { label: __( 'Dotted', 'porto-functionality' ), value: 'dotted' }, { label: __( 'Dashed', 'porto-functionality' ), value: 'dashed' }, { label: __( 'Groove', 'porto-functionality' ), value: 'groove' } ] }
							onChange={ ( val ) => {
								if ( ! value.hover ) {
									value.hover = {};
								}
								value.hover.border_style = val;
								onChange( value );
							} }
						/>
						<div style={ { display: 'flex', flexWrap: 'wrap' } }>
							<label style={ { width: '100%', marginBottom: 5 } }>
								{ __( 'Border Width', 'porto-functionality' ) }
							</label>
							<UnitControl
								label={ __( 'Top', 'porto-functionality' ) }
								value={ value.hover && value.hover.border_top }
								onChange={ ( val ) => {
									if ( ! value.hover ) {
										value.hover = {};
									}
									value.hover.border_top = val;
									onChange( value );
								} }
							/>
							<UnitControl
								label={ __( 'Right', 'porto-functionality' ) }
								value={ value.hover && value.hover.border_right }
								onChange={ ( val ) => {
									if ( ! value.hover ) {
										value.hover = {};
									}
									value.hover.border_right = val;
									onChange( value );
								} }
							/>
							<UnitControl
								label={ __( 'Bottom', 'porto-functionality' ) }
								value={ value.hover && value.hover.border_bottom }
								onChange={ ( val ) => {
									if ( ! value.hover ) {
										value.hover = {};
									}
									value.hover.border_bottom = val;
									onChange( value );
								} }
							/>
							<UnitControl
								label={ __( 'Left', 'porto-functionality' ) }
								value={ value.hover && value.hover.border_left }
								onChange={ ( val ) => {
									if ( ! value.hover ) {
										value.hover = {};
									}
									value.hover.border_left = val;
									onChange( value );
								} }
							/>
						</div>
						<label style={ { width: '100%', marginTop: 10, marginBottom: 5 } }>
							{ __( 'Border Color', 'porto-functionality' ) }
							<span className="porto-color-show" style={ { backgroundColor: value.hover && value.hover.border_color } }>
							</span>
						</label>
						<ColorPalette
							label={ __( 'Color', 'porto-functionality' ) }
							value={ value.hover && value.hover.border_color }
							onChange={ ( val ) => {
								if ( ! value.hover ) {
									value.hover = {};
								}
								value.hover.border_color = val;
								onChange( value );
							} }
						/>

						<div className="mb-3" style={ { display: 'flex', flexWrap: 'wrap' } }>
							<label style={ { width: '100%', marginBottom: 5 } }>
								{ __( 'Position', 'porto-functionality' ) }
							</label>
							<UnitControl
								label={ __( 'Top', 'porto-functionality' ) }
								value={ value.hover && value.hover.top }
								onChange={ ( val ) => {
									if ( ! value.hover ) {
										value.hover = {};
									}
									value.hover.top = val;
									onChange( value );
								} }
							/>
							<UnitControl
								label={ __( 'Right', 'porto-functionality' ) }
								value={ value.hover && value.hover.right }
								onChange={ ( val ) => {
									if ( ! value.hover ) {
										value.hover = {};
									}
									value.hover.right = val;
									onChange( value );
								} }
							/>
							<UnitControl
								label={ __( 'Bottom', 'porto-functionality' ) }
								value={ value.hover && value.hover.bottom }
								onChange={ ( val ) => {
									if ( ! value.hover ) {
										value.hover = {};
									}
									value.hover.bottom = val;
									onChange( value );
								} }
							/>
							<UnitControl
								label={ __( 'Left', 'porto-functionality' ) }
								value={ value.hover && value.hover.left }
								onChange={ ( val ) => {
									if ( ! value.hover ) {
										value.hover = {};
									}
									value.hover.left = val;
									onChange( value );
								} }
							/>
						</div>

						<UnitControl
							label={ __( 'TranslateX', 'porto-functionality' ) }
							value={ value.hover && value.hover.translatex }
							onChange={ ( val ) => {
								if ( ! value.hover ) {
									value.hover = {};
								}
								value.hover.translatex = val;
								onChange( value );
							} }
						/>
						<UnitControl
							label={ __( 'TranslateY', 'porto-functionality' ) }
							value={ value.hover && value.hover.translatey }
							onChange={ ( val ) => {
								if ( ! value.hover ) {
									value.hover = {};
								}
								value.hover.translatey = val;
								onChange( value );
							} }
						/>
						<div className="mb-3" />
						<RangeControl
							label={ __( 'Opacity', 'porto-functionality' ) }
							value={ value.hover && typeof value.hover.opacity != 'undefined' && value.hover.opacity }
							min="0"
							max="1"
							step="0.01"
							allowReset={ true }
							onChange={ ( val ) => {
								if ( ! value.hover ) {
									value.hover = {};
								}
								value.hover.opacity = val;
								onChange( value );
							} }
						/>
					</div>
					{ boxShadowEnabled && (
						<div className="porto-typography-control porto-dimension-control">
							<h3 className="components-base-control" style={ { marginBottom: 15 } }>
								{ __( 'Box Shadow', 'porto-functionality' ) }
							</h3>
							<SelectControl
								label={ __( 'Type', 'porto-functionality' ) }
								value={ value.hover && value.hover.boxshadow && value.hover.boxshadow.type }
								options={ [ { label: __( 'Outset', 'porto-functionality' ), value: '' }, { label: __( 'Inset', 'porto-functionality' ), value: 'inset' }, { label: __( 'None', 'porto-functionality' ), value: 'none' }, { label: __( 'Inherit', 'porto-functionality' ), value: 'inherit' } ] }
								onChange={ ( val ) => {
									if ( ! value.hover ) {
										value.hover = {};
									}
									if ( ! value.hover.boxshadow ) {
										value.hover.boxshadow = {};
									}
									value.hover.boxshadow.type = val;
									onChange( value );
								} }
							/>
							<div className="mb-3" style={ { display: 'flex', flexWrap: 'wrap' } }>
								<UnitControl
									label={ __( 'X', 'porto-functionality' ) }
									value={ value.hover && value.hover.boxshadow && value.hover.boxshadow.x }
									onChange={ ( val ) => {
										if ( ! value.hover ) {
											value.hover = {};
										}
										if ( ! value.hover.boxshadow ) {
											value.hover.boxshadow = {};
										}
										value.hover.boxshadow.x = val;
										onChange( value );
									} }
								/>
								<UnitControl
									label={ __( 'Y', 'porto-functionality' ) }
									value={ value.hover && value.hover.boxshadow && value.hover.boxshadow.y }
									onChange={ ( val ) => {
										if ( ! value.hover ) {
											value.hover = {};
										}
										if ( ! value.hover.boxshadow ) {
											value.hover.boxshadow = {};
										}
										value.hover.boxshadow.y = val;
										onChange( value );
									} }
								/>
								<UnitControl
									label={ __( 'Blur', 'porto-functionality' ) }
									value={ value.hover && value.hover.boxshadow && value.hover.boxshadow.blur }
									onChange={ ( val ) => {
										if ( ! value.hover ) {
											value.hover = {};
										}
										if ( ! value.hover.boxshadow ) {
											value.hover.boxshadow = {};
										}
										value.hover.boxshadow.blur = val;
										onChange( value );
									} }
								/>
								<UnitControl
									label={ __( 'Spread', 'porto-functionality' ) }
									value={ value.hover && value.hover.boxshadow && value.hover.boxshadow.spread }
									onChange={ ( val ) => {
										if ( ! value.hover ) {
											value.hover = {};
										}
										if ( ! value.hover.boxshadow ) {
											value.hover.boxshadow = {};
										}
										value.hover.boxshadow.spread = val;
										onChange( value );
									} }
								/>
							</div>
							<ColorPicker
								label={ __( 'Color', 'porto-functionality' ) }
								color={ value.hover && value.hover.boxshadow && value.hover.boxshadow.color }
								onChangeComplete={ ( val ) => {
									if ( ! value.hover ) {
										value.hover = {};
									}
									if ( ! value.hover.boxshadow ) {
										value.hover.boxshadow = {};
									}
									value.hover.boxshadow.color = 'rgba(' + val.rgb.r + ',' + val.rgb.g + ',' + val.rgb.b + ',' + val.rgb.a + ')';
									onChange( value );
								} }
							/>
						</div>
					) }
				</PanelBody>
			) }
		</>
	);
};

export default PortoStyleOptionsControl;

export const portoGenerateStyleOptionsCSS = function( style_options, selector ) {
	var css = '';
	if ( ! style_options || ! selector ) {
		return '';
	}
	const options = {
		bg: {
			color: 'background-color',
			img_url: 'background-image',
			position: 'background-position',
			attachment: 'background-attachment',
			repeat: 'background-repeat',
			size: 'background-size',
		},
		border: {
			color: 'border-color',
			style: 'border-style',
			top: 'border-top-width',
			right: 'border-right-width',
			bottom: 'border-bottom-width',
			left: 'border-left-width',
		},
		borderRadius: {
			top: 'border-top-left-radius',
			right: 'border-top-right-radius',
			bottom: 'border-bottom-right-radius',
			left: 'border-bottom-left-radius',
		},
		margin: {
			top: 'margin-top',
			right: 'margin-right',
			bottom: 'margin-bottom',
			left: 'margin-left',
		},
		padding: {
			top: 'padding-top',
			right: 'padding-right',
			bottom: 'padding-bottom',
			left: 'padding-left',
		},
		position: {
			style: 'position',
			zindex: 'z-index',
			top: 'top',
			right: 'right',
			bottom: 'bottom',
			left: 'left',
			width: 'width',
			opacity: 'opacity',
		}
	},
	hover_options = {
		bg: 'background-color',
		color: 'color',
		border_style: 'border-style',
		border_top: 'border-top-width',
		border_right: 'border-right-width',
		border_bottom: 'border-bottom-width',
		border_left: 'border-left-width',
		border_color: 'border-color',
		top: 'top',
		right: 'right',
		bottom: 'bottom',
		left: 'left',
		opacity: 'opacity'
	};

	css += 'html .' + selector + '{';
	_.each( options, function( item, property ) {
		if ( typeof style_options[ property ] != 'undefined' && style_options[ property ] ) {
			_.each( item, function( css_property, attr_name ) {
				if ( typeof style_options[ property ][ attr_name ] != 'undefined' && ( '' + style_options[ property ][ attr_name ] ).length ) {
					var val = style_options[ property ][ attr_name ];
					if ( 'background-image' == css_property ) {
						val = 'url(' + val + ')';
					}
					css += css_property + ':' + val + ';';
				}
			} );
		}
	} );
	if ( style_options.position ) {
		if ( style_options.position.halign ) {
			if ( 'x' === style_options.position.halign ) {
				css += 'margin-left:auto;margin-right:auto;';
			} else if ( 'l' === style_options.position.halign ) {
				css += 'margin-left:auto;';
			} else if ( 'r' === style_options.position.halign ) {
				css += 'margin-right:auto;';
			}
		}
		if ( style_options.position.translatex || style_options.position.translatey ) {
			css += 'transform:';
			if ( style_options.position.translatex ) {
				css += ' translateX(' + style_options.position.translatex + ')';
			}
			if ( style_options.position.translatey ) {
				css += ' translateY(' + style_options.position.translatey + ')';
			}
			css += ';';
		}
	}
	if ( style_options.boxshadow && ( style_options.boxshadow.type || ( style_options.boxshadow.color ) ) ) {
		css += 'box-shadow:';
		if ( style_options.boxshadow.type && 'inset' != style_options.boxshadow.type ) {
			css += style_options.boxshadow.type;
		} else {
			if ( style_options.boxshadow.type ) {
				css += style_options.boxshadow.type;
			}
			if ( style_options.boxshadow.x ) {
				css += ' ' + style_options.boxshadow.x;
			} else {
				css += ' 0';
			}
			if ( style_options.boxshadow.y ) {
				css += ' ' + style_options.boxshadow.y;
			} else {
				css += ' 0';
			}
			if ( style_options.boxshadow.blur ) {
				css += ' ' + style_options.boxshadow.blur;
			}
			if ( style_options.boxshadow.spread ) {
				css += ' ' + style_options.boxshadow.spread;
			}
			if ( style_options.boxshadow.color ) {
				css += ' ' + style_options.boxshadow.color;
			}
		}
		css += ';';
	}
	css += '}';

	if ( style_options.hover ) {
		css += 'html .' + selector + ':hover{';
		_.each( hover_options, function( css_property, attr_name ) {
			if ( typeof style_options.hover[ attr_name ] != 'undefined' && ( '' + style_options.hover[ attr_name ] ).length ) {
				css += css_property + ':' + style_options.hover[ attr_name ] + ';';
			}
		} );
		if ( style_options.hover.translatex || style_options.hover.translatey ) {
			css += 'transform:';
			if ( style_options.hover.translatex ) {
				css += ' translateX(' + style_options.hover.translatex + ')';
			}
			if ( style_options.hover.translatey ) {
				css += ' translateY(' + style_options.hover.translatey + ')';
			}
			css += ';';
		}
		if ( style_options.hover.boxshadow && ( style_options.hover.boxshadow.type || ( style_options.hover.boxshadow.color ) ) ) {
			css += 'box-shadow:';
			if ( style_options.hover.boxshadow.type && 'inset' != style_options.hover.boxshadow.type ) {
				css += style_options.hover.boxshadow.type;
			} else {
				if ( style_options.hover.boxshadow.type ) {
					css += style_options.hover.boxshadow.type;
				}
				if ( style_options.hover.boxshadow.x ) {
					css += ' ' + style_options.hover.boxshadow.x;
				} else {
					css += ' 0';
				}
				if ( style_options.hover.boxshadow.y ) {
					css += ' ' + style_options.hover.boxshadow.y;
				} else {
					css += ' 0';
				}
				if ( style_options.hover.boxshadow.blur ) {
					css += ' ' + style_options.hover.boxshadow.blur;
				}
				if ( style_options.hover.boxshadow.spread ) {
					css += ' ' + style_options.hover.boxshadow.spread;
				}
				if ( style_options.hover.boxshadow.color ) {
					css += ' ' + style_options.hover.boxshadow.color;
				}
			}
			css += ';';
		}
		css += '}';
	}

	return css;
};