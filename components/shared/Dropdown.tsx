import { Select, SelectContent, SelectItem,
    SelectTrigger, SelectValue,
} from "@/components/ui/select"

type DropdownProps = {
    type: string;
    onSelectChange: () => void;
    value: string;
}

export default function Dropdown({ type, onSelectChange, value }: DropdownProps) {
  return (
      <>
       {type == "country" && (
        <Select onValueChange={onSelectChange} defaultValue={value}>
         <SelectTrigger className="w-full">
          <SelectValue placeholder="Ghana" />
         </SelectTrigger>
         <SelectContent className="outline-offset-0 focus-visible:ring-0
            focus-visible:ring-offset-0 active:ring-offset-0 active:ring-0">
          <SelectItem value="Ghana">Ghana</SelectItem>
          <SelectItem value="Togo">Togo</SelectItem>
          <SelectItem value="Nigeria">Nigeria</SelectItem>
         </SelectContent>
        </Select>
       )}
       {type == "accountType" && (
        <Select onValueChange={onSelectChange} defaultValue={value}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Seller Account" />
         </SelectTrigger>
         <SelectContent>
          <SelectItem value="Seller Account">Seller Acccount</SelectItem>
          <SelectItem value="Buyer Account">Buyer Account</SelectItem>
         </SelectContent>
        </Select>
       )}
      </>
  )
}
