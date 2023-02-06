interface Theme {
    id: number;
    name: string;
    primary: "blue" | "green",
    secondary: "white" | "black"
}

interface DarkTheme extends Theme {
    button: string;
}

const theme: Theme = {
    id: 1,
    name: "planet",
    primary:"blue",
    secondary: "white"
}

const darkTheme: DarkTheme = {
    ...theme,
    id:2,
    button: "submit"
}