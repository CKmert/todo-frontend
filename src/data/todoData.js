import { v4 as uuidv4} from "uuid";

export const todoData =  [ 

    {
      subject: "Lernen",
      done: false,
      category: "Schule",
      id: uuidv4()
    },
    
    {
      subject: "Einkaufen",
      done: false,
      category: "Haushalt",
      id: uuidv4()
    },
    
    {
      subject: "Personalausweis verlängern",
      done: false,
      category: "Bürokratie",
      id: uuidv4()
    }  
  
    ]