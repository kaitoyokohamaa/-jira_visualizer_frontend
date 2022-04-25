import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

function App() {
  return (
    <div className="App">
      <Badge badgeContent={4} color="primary">
        <MailIcon color="action" />
      </Badge>
    </div>
  );
}

export default App;
