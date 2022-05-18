import { useEffect } from "react"
import { Wrapper, PopupWrapper } from "../styled/Popup.styled"

const Popup = ({ children, content, theme, active, onClose }) => {

    useEffect(() => {
        window.addEventListener('click', onClose)

        return () => window.removeEventListener('click', onClose)
    }, [])
    return (
        <Wrapper onClick={e => e.stopPropagation()}>
            <PopupWrapper theme={theme} active={active}>
                {content}
            </PopupWrapper>
            {children}
        </Wrapper>
    )
}

export default Popup