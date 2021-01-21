import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardLink,
} from 'reactstrap';

const ItemDisplay = ({item}) => {
  return (
    <div className="w-20 h-30">
      <Card>
        <CardImg className="my-img" top width="50%" src={item.img} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{item.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{item.subTitle}</CardSubtitle>
          <CardLink href={item.link1} target="_blank">View site</CardLink>
          <CardLink href={item.link2} target="_blank">View code</CardLink>
        </CardBody>
      </Card>
        </div>
  );
}
 
export default ItemDisplay;