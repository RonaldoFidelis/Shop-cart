import { useNavigate } from "react-router-dom";
import { IRedirector } from "../interface/redirector";

export class Redirector implements IRedirector {
  private navigate = useNavigate();

  navigateToCart(): void {
    this.navigate('/cart');
  }

  navigateToFavorites(): void {
    this.navigate('/favorite');
  }

  navigateToOrder(): void {
    this.navigate('/order');
  }
}
