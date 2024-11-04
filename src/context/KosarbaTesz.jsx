import { createContext, useState } from "react";

export const KosarContext = createContext("")

export const KosarProvider = ({ children }) => {
    const [lista, setlista] = useState([])

    function getKosarItems(obj) {
        // Ellenőrizzük, hogy az objektum szerepel-e a kosárban
        if (!lista.some((e) => e.id === obj.id)) {
            // Ha nem szerepel, akkor hozzáadjuk
            setlista([...lista, { ...obj, mennyiseg: 1 }]) // Új objektum mennyiséggel
        } else {
            // Ha már szerepel a kosárban, növeljük a mennyiségét
            setlista(lista.map((e) => (e.id === obj.id ? { ...e, mennyiseg: e.mennyiseg + 1 } : e)))
        }
    }

    function mennycsokkentes(id) {
        setlista((prevLista) => {
            return prevLista.reduce((acc, e) => {
                if (e.id === id) {
                    if (e.mennyiseg > 1) {
                        acc.push({ ...e, mennyiseg: e.mennyiseg - 1 })
                    } // Ha 1-nél kisebb a mennyiség, nem adunk hozzá elemet
                } else {
                    acc.push(e) // Hozzáadjuk a többi elemet
                }
                return acc
            }, [])
        })
    }
    function mennyNoveles(id) {
        setlista((prevLista) =>
            prevLista.map((e) => {
                if (e.id === id) {
                    return { ...e, mennyiseg: e.mennyiseg + 1 } // Növeljük a mennyiséget
                }
                return e // Visszaadjuk az elemet, ha nem egyezik az ID
            })
        )
    }
    function kosarMeret() {
        return lista.reduce((sum, aktualis) => {
            return sum + aktualis.mennyiseg
        }, 0)
    }

    return (
        <KosarContext.Provider value={{
            lista,
            mennyNoveles, mennycsokkentes, getKosarItems, kosarMeret
        }}>
            {children}
        </KosarContext.Provider>
    )
}