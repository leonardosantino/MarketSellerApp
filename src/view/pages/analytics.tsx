import {
  AttachMoney,
  Inventory,
  People,
  ShoppingCart,
} from "@mui/icons-material";

import { Col, Row } from "@/com/ui";
import { Billing } from "@/view/comps/analytics/billing";
import { Metric } from "@/view/comps/analytics/metric";
import { AnalyticsOrders } from "@/view/comps/analytics/orders";
import { BestSellers } from "@/view/comps/analytics/sales";

export function Analytics() {
  return (
    <Col
      sx={{
        padding: 2,
        gap: 4,
      }}
    >
      <Row
        sx={{
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Metric
          title="Vendas"
          value="R$ 4.231,00"
          change={12.5}
          Icon={AttachMoney}
          color="primary.main"
        />

        <Metric
          title="Pedidos"
          value="1.234"
          change={8.2}
          Icon={ShoppingCart}
          color="success.main"
        />

        <Metric
          title="Clientes"
          value="892"
          change={-2.1}
          Icon={People}
          color="info.main"
        />

        <Metric
          title="Produtos"
          value="456"
          change={5.7}
          Icon={Inventory}
          color="warning.main"
        />
      </Row>

      <Row
        sx={{
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Col sx={{ gap: 2, flexGrow: 1 }}>
          <Billing />
          <AnalyticsOrders />
        </Col>

        <BestSellers />
      </Row>
    </Col>
  );
}
