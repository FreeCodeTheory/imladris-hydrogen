import Collapsible from './Collapsible';

const Accordions = () => {
return (
<div className="space-y-4">
    <Collapsible title="Title 1" content="Content 1" />
    <Collapsible title="Title 2" content="Content 2" />
    <Collapsible title="Title 3" content="Content 3" />
    <Collapsible title="Title 4" content="Content 4" />
</div>
);
};

export default Accordions;
