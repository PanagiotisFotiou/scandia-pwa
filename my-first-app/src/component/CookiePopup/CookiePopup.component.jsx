import {
    CookiePopupComponent as SourceCookiePopupComponent,
} from 'SourceComponent/CookiePopup/CookiePopup.component';

import './CookiePopup.override.style';

/** @namespace myFirstApp/Component/CookiePopup/Component */
export class CookiePopupComponent extends SourceCookiePopupComponent {
    renderCTA() {
        return (
            <div
              block="CookiePopup"
              elem="CTA Button"
              onClick={ this.acceptCookies }
              onKeyDown={ this.acceptCookies }
              role="button"
              tabIndex={ 0 }
            >
                { __('Accept') }
            </div>
        );
    }

    renderTitle() {
        return (
            <h2 block="CookiePopup" elem="Title">
                { __('Cookie Notice') }
            </h2>
        );
    }

    render() {
        const { cookieText } = this.props;
        const { isAccepted } = this.state;

        if (!cookieText || isAccepted) {
            return null;
        }

        return (
            <div block="CookiePopup">
                { this.renderTitle() }
                { this.renderCookieText() }
                { this.renderCTA() }
            </div>
        );
    }
}

export default CookiePopupComponent;
