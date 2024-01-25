import { ChangeEventHandler, FormEventHandler } from "react"
import Button, {ButtonType} from "../../ui/button"
import TextInput from "../../ui/text-input"
import styles from './styles.module.css'

export type SearchType = {
  name: string
  onTextChange?:  ChangeEventHandler<HTMLInputElement>
  searchText?: string
}

const Search = ({ 
    name, 
    onTextChange,
    searchText
  }: SearchType) => (
  <div className={styles.main}>
    <TextInput 
      type='search' 
      name={name} 
      onChange={onTextChange}
      defaultValue={searchText}
    />
    <Button type="submit">
      Search
    </Button>
  </div>
)

export default Search