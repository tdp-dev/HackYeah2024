import ContextMenu from './ContextMenu';
import RoutingOptions from './RoutingOptions';
import TopBar from './TopBar';

function DefaultLayout() {
  return (
    <>
      <TopBar />
      <ContextMenu />
      <RoutingOptions />
    </>
  );
}

export default DefaultLayout;
