import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import Image from "next/image";

export function CartItem({ id, quantity, data }: any) {
  const { removeFromCart } = useShoppingCart();
  //@ts-ignore
  const item = data.find((i) => i.sys.id === id);

  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <Image src={item.fields.url} height={75} width={125} objectFit="cover" />
      <div className="me-auto">
        <div>
          {item.fields.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {" "}
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.fields.price)}
        </div>
      </div>
      <div> {formatCurrency(item.fields.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.sys.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
