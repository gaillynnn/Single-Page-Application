import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  return (
    <Dropdown.Menu show>
      <Dropdown.Item eventKey="1">Home</Dropdown.Item>
      <Dropdown.Item eventKey="2">About</Dropdown.Item>
      <Dropdown.Item eventKey="3">Portfolio</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </Dropdown.Menu>
  );
}

export default Header;