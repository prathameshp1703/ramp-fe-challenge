import { FunctionComponent } from "react"

type InputCheckboxProps = {
  id: string | number
  isChecked?: boolean
  onChange: () => void
  disabled?: boolean
}

export type InputCheckboxComponent = FunctionComponent<InputCheckboxProps>
