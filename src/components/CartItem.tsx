import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import useFetch from "../hooks/useFetch";
import { formatCurrency } from "../utilities/formatCurrency";

export function CartItem({ id, quantity }: any) {
  const { loading, error, data } = useFetch("http://localhost:1337/api/items");
  if (loading) return <p>"loading....."</p>;
  if (error) return <p>"error"</p>;

  const { removeFromCart } = useShoppingCart();
  const item = data.data.find((i: any) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.attributes.url}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.attributes.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.attributes.price)}
        </div>
      </div>
      <div> {formatCurrency(item.attributes.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
