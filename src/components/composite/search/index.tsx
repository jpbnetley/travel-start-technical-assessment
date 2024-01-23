import { ChangeEventHandler, FormEventHandler } from "react"
import Button from "../../ui/button"
import TextInput from "../../ui/text-input"
import styles from './styles.module.css'

export type SearchType = {
  name: string
  onSubmit?: FormEventHandler<HTMLInputElement>
  onTextChange?:  ChangeEventHandler<HTMLInputElement>
  searchText?: string
}

const Search = ({ 
  name, 
  onTextChange,
  onSubmit,
  searchText
  }: SearchType) => (
  <div className={styles.main}>
    <TextInput 
      type='search' 
      name={name} 
      onChange={onTextChange}
      defaultValue={searchText}
    />
    <Button type="submit" onSubmit={onSubmit} />
  </div>
)

export default Search