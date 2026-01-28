import Icon from "./Icon";
import placeholder from "./placeholder.jpg";

const displayIcon = (icon_url: string, department: string) => {
  const img_extension_regex: RegExp = /(?:\.([^.]+))?$/;

  const extension = img_extension_regex.exec(icon_url);

  const img = (
    <img
      src={`${icon_url}`}
      className=" h-10 max-w-10 rounded-full"
      alt={`Company logo`}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null;
        currentTarget.src = `${placeholder}`;
      }}
    />
  );

  if (extension) {
    switch (extension[1]) {
      case "png":
      case "ico":
      case "svg":
        return img;
      default:
        return <Icon department={department} />;
    }
  }
};

export { displayIcon };
