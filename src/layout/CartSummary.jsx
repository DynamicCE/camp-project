import React from "react";
import { DropdownMenu, DropdownItem, Dropdown } from "semantic-ui-react";
export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Language">
        <Dropdown.Menu>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Türkçe</Dropdown.Item>
          <Dropdown.Item>한국인</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
