import { connect } from 'react-redux';

import {
    CookiePopupContainer as SourceCookiePopupContainer,
    mapDispatchToProps,
    mapStateToProps,
} from 'SourceComponent/CookiePopup/CookiePopup.container';

export {
    mapStateToProps,
    mapDispatchToProps,
};

/** @namespace myFirstApp/Component/CookiePopup/Container */
export class CookiePopupContainer extends SourceCookiePopupContainer {
    // TODO implement logic
}

export default connect(mapStateToProps, mapDispatchToProps)(CookiePopupContainer);
