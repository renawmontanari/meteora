
import { createContext, useState } from "react";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

export const CarrinhoProvider = ({children}) => {
    const [carrinho, setCarrinho] = useState([]);
    const [quantidade, setQuantidade] = useState(0); 
    const [valorTotal, setValortotal] = useState(0); 

    return (
        <CarrinhoContext.Provider 
            value={{ 
                carrinho, 
                setCarrinho, 
                quantidade, 
                setQuantidade, 
                valorTotal, 
                setValortotal 
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
} 