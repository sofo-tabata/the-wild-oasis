import { RiLogoutBoxLine } from "react-icons/ri";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <RiLogoutBoxLine /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
