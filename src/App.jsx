
import Button from '@mui/material/Button'
import { DeleteIcon } from '@mui/icons-material'
function App() {
  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>


    </>
  )
}

export default App
