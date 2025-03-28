import VoucherTagStyled from "./VoucherTag.styled";

// Common voucher tag component

const VoucherTag = ({ discount }) => {
    return (
        // SVG rendered rather than linked to for more control. Discount text rendered within the SVG itself as <text>.
        <VoucherTagStyled>
            <svg height="27.7" viewBox="0 0 72.53 27.7" width="72.53" xmlns="http://www.w3.org/2000/svg"><path d="m9582.26 10718.5 54.78.1a4.238 4.238 0 0 1 4.23 4.2l.03 19.3a4.2 4.2 0 0 1 -4.2 4.2l-54.79-.2c-3.69 0-13.5-9.3-13.51-14.2-.01-5 10.25-13.4 13.46-13.4z" fill="#da5f45" fill-rule="evenodd" transform="translate(-9568.78 -10718.5)" />
                <text fill="#ffffff" x="50%" y="52.5%">{discount}% OFF</text>
            </svg>
        </VoucherTagStyled>
    )
}

export default VoucherTag;