import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import useFetch from "../hooks/useFetch";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { loading, error, data } = useFetch("http://localhost:1337/api/items");
  if (loading) return <p>"loading....."</p>;
  if (error) return <p>"error"</p>;

  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = data.data.find((i: any) => i.id === cartItem.id);
                return (
                  total + (item?.attributes.price || 0) * cartItem.quantity
                );
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
