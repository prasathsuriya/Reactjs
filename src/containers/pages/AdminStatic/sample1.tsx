import React from 'react';
import { connect } from "react-redux";
import CheckboxTree from 'react-checkbox-tree';
/*import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import 'react-checkbox-tree/src/less/react-checkbox-tree.less';
import 'react-checkbox-tree/src/scss/react-checkbox-tree.scss'; */

const nodes = [{
    value: 'mars',
    label: 'Mars',
    children: [
        { value: 'phobos', label: 'Phobos' },
        { value: 'deimos', label: 'Deimos' },
    ],
}];

class sample1 extends React.Component {
    state = {
        checked: [],
        expanded: [],
    };

    render() {
        return (
            <CheckboxTree
                nodes={nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
                iconsClass='fa5'
                icons={{
                    check: <span className="rct-icon rct-icon-check" />,
                    uncheck: <span className="rct-icon rct-icon-uncheck" />,
                    halfCheck: <span className="rct-icon rct-icon-half-check" />,
                    expandClose: <span className="rct-icon rct-icon-expand-close" />,
                    expandOpen: <span className="rct-icon rct-icon-expand-open" />,
                    expandAll: <span className="rct-icon rct-icon-expand-all" />,
                    collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
                    parentClose: <span className="rct-icon rct-icon-parent-close" />,
                    parentOpen: <span className="rct-icon rct-icon-parent-open" />,
                    leaf: <span className="rct-icon rct-icon-leaf" />,
                }}
            />
        );
    }
}
const mapStateToProps = (state: any) => {
    const { deviceFormData } = state;
    return {
      deviceFormData
    };
  };
export default connect(mapStateToProps)(sample1)