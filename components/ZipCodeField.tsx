import "./ZipCodeField.css";

export const ZipCodeField = ({
  override,
  textField,
}: {
  override?: any;
  textField: string;
}) => {
  switch (textField) {
    case "toggle":
      return (
        <div style={override} className="zipCodeField">
          <div className="rectangle" />
          <p className="text33611">33611</p>
        </div>
      );
    case "hover":
      return (
        <div style={override} className="zipCodeFieldComponent">
          <div className="rectangleDiv" />
          <p className="zipCode">zip code</p>
          <p className="or">|</p>
        </div>
      );
    case "Default":
      return (
        <div style={override} className="zipCodeFieldComponent1">
          <div className="rectangleDiv1" />
          <p className="zipCodeText">zip code</p>
        </div>
      );
    default:
      return null;
  }
};
