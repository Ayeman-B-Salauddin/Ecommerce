//@ts-nocheck

import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import { createClient } from "contentful";
import Swal from "sweetalert2";

type ShoppingCartProps = {
  isOpen: boolean;
  data2: any;
};
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "products",
    order: "fields.id",
  });

  return {
    props: {
      products: res.items,
      revalidate: 60 * 60,
    },
  };
}

export function ShoppingCart({ isOpen, data2 }: ShoppingCartProps) {
  const { removeAll, closeCart, cartItems } = useShoppingCart();
  function handleOrder(id: any) {
    Swal.fire({
      title: 'Would you like to place an order right away?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes, order now',
      denyButtonText: `Don't`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Order successfully placed!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('No purchase was made', '', 'info')
      }
    })
  }
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item: any) => (
            <CartItem key={item.id} {...item} data={data2} />
          ))}

          <div className="ms-auto fw-bold fs-5">
            Total 
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = data2.find((i: any) => i.sys.id === cartItem.id);
                return total + (item?.fields.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <br />
          <button type="button" className="btn btn-danger" onClick={removeAll}>Remove All</button>
          <button type="button" className="btn btn-warning" onClick={handleOrder}>Place Order</button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
