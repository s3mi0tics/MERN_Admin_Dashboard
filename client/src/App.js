import { CssBaseline, ThemePrivider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemePrivider theme={theme}>
        <CssBaseline />
      </ThemePrivider>
    </div>
  );
}

export default App;
