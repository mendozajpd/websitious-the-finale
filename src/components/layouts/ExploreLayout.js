import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

// UI
import ExploreTopNav from "../ui/ExploreTopNav";

const LandingLayout = () => {

    return (
        <div className="d-flex vh-100">
            <Container fluid className='g-0 h-100 '>
                <ExploreTopNav/>
                <Outlet />
            </Container>
        </div>
    );
}

export default LandingLayout;