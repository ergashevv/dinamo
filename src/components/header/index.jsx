import { Logo, SearchIcon } from "../../assets/images/icons";
import { Link } from "react-router-dom";
import Modal from "../../assets/images/align-justify.svg";
import { Button, Form, InputGroup } from "react-bootstrap";
import Store from "../store";
import "./header.scss";
import StoreIcon from "../../assets/images/default.svg";

const Header = () => {
  return (
    <div className="container-xxl">
      <header>
        <div className="container">
          <div className="header">
            <div className="header-logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="header-center">
              <button className="header-category">
                <img src={Modal} alt="" />
                Каталог
              </button>
              <div className="header-search">
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Поиск по товарам"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    <SearchIcon />
                    Найти
                  </Button>
                </InputGroup>
              </div>
            </div>
            <div className="header-buttons">
              <Store img={StoreIcon} text={"Заказы"} />
              <Store img={StoreIcon} text={"Заказы"} />
              <Store img={StoreIcon} text={"Заказы"} />
              <Store img={StoreIcon} text={"Заказы"} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
