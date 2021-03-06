import React, { Fragment } from 'react';
import Path  from 'path';
import Fs    from 'fs';

import AUbutton  from '../../_auds/layout/buttons';
import AUctaLink  from '../../_auds/layout/cta-link';

/**
 * The NavigationAccordion component
 */
const TemplateDemo = ({ _ID, _body, _relativeURL }) => {
	const templateID = _ID.split( '/' )[ 1 ];
	const templateImgAssetDir = Path.normalize( `${ __dirname }/../../../src/assets/img/templates` );
	const templateImgs = Fs.readdirSync( templateImgAssetDir );

	// Match the template ID with the img filename, we do this so we can use whatever file ext.
	let templateImg = templateImgs.find( item => new RegExp( templateID ).test( item ) );

	return (
		<div className="template-demo">
			<div className="row">
				<div className="col-sm-6">
					<a href="customise" className="browser-bar au-card au-card--shadow">
						<img
							alt={ `${ templateID } page template` }
							className="template-demo_img"
							src={ _relativeURL( `/assets/img/templates/${ templateImg }`, _ID ) }
						/>
					</a>
				</div>
				<div className="col-sm-6">
					{ _body }
						<AUctaLink className="template-demo__cta" text="Customise this template" link={ _relativeURL(`/templates/${ templateID }/customise`, _ID ) }></AUctaLink>
				</div>
			</div>
		</div>
	);
};

TemplateDemo.propTypes = {};

TemplateDemo.defaultProps = {};

export default TemplateDemo;
