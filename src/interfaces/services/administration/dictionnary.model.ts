import { RuleDictionnaryManufacturer } from "./dictionarries/ruledictionnarymanufacturer.model";
import { RuleDictionnaryPrinter } from "./dictionarries/ruledictionnaryprinter.model";
import { RuleDictionnarySoftware } from "./dictionarries/ruledictionnarysoftware.model";

export interface Dictionnary {
    RuleDictionnarySoftware: RuleDictionnarySoftware;
    RuleDictionnaryManufacturer: RuleDictionnaryManufacturer;
    RuleDictionnaryPrinter: RuleDictionnaryPrinter;
}