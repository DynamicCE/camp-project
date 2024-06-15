import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Menu, Image } from "semantic-ui-react";
export default function Signedin() {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://picsum.photos/200/300" />
      </Menu.Item>
      <Dropdown pointing="left" text="Erkan" style={{ color: "white" }}>
        <Dropdown.Menu>
          <Dropdown.Item text="Bilgilerim" icon="info" />
          <Dropdown.Item text="Ayarlar" icon="settings" />
          <Dropdown.Item text="Çıkış Yap" icon="sign-out" />{" "}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
