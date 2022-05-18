import { cloneElement, useEffect, useRef } from "react"
import { Flex } from "../styled/App.styled"
import { Wrapper, FieldWrapper } from "../styled/Setting.styled"


const Setting = ({ setValues, values, initConf, setTheme, theme }) => {
    const valuesRef = useRef({ ...values })

    const FieldItem = ({ label, name, children, onChange, defaultValue }) => {
        const onKeyDown = e => {
            if (e.which === 190) return e.preventDefault()
        }

        const handleChange = e => {
            const { value: v, type } = e.target
            const min = 7
            const max = 50
            if (onChange) onChange(v)
            else {
                const num =  Number(v) < min ? min : Number(v) > max ? max : Number(v)
                valuesRef.current = { ...valuesRef.current, [name]: type === 'number' ? num : v }
            }
        } 
        return (
            <FieldWrapper>
                <label htmlFor={name}>{label}</label>
                {cloneElement(children, { 
                    name, onKeyDown, onChange: handleChange, 
                    defaultValue: defaultValue || valuesRef.current[name],
                    onKeyUp: e => e.which === 13 && submit()
                })}
            </FieldWrapper>
        )
    }

    const submit = () => setValues(valuesRef.current)

    const reset = () => {
        valuesRef.current = initConf
        setValues({ ...initConf })
    }

    useEffect(() => {
        valuesRef.current = values
    }, [values])

    return (
        <Wrapper>
            <FieldItem label='Row' name='rows'>
                <input type="number" />
            </FieldItem>
            <FieldItem label='Column' name='cols'>
                <input type="number" />
            </FieldItem>
            <Flex style={{ margin: '16px 0' }}>
                <button onClick={() => reset()} style={{ marginRight: '4px' }}>reset</button>
                <button onClick={() => submit()}>confirm</button>
            </Flex>
            <FieldItem 
                label='Theme' 
                name='theme' 
                onChange={(v) => setTheme(v)}
                defaultValue={theme}
            >
                <select>
                    <option value="dark">dark</option>
                    <option value="light">light</option>
                </select>
            </FieldItem>
        </Wrapper>
    )
}

export default Setting