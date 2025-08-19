import { Button } from "@mui/material";
import { useLogOut } from "../model/LogOut";

export function LogOutBtn() {
  const logOut = useLogOut();
  return (
    <>
      <Button variant="outlined" onClick={logOut} sx={{ bgcolor: "red" }}>
        Log out
      </Button>
    </>
  );
}
