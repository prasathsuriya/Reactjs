import React from 'react';
import { connect } from "react-redux";
import CheckboxTree from 'react-checkbox-tree';
import {Button} from 'primereact/button';

const nodes = [{
    value: 'home',
    label: 'Home',
    children: [ ],
},
{
    value: 'reports',
    label: 'Reports',
    children: [
        { value: 'reports1', label: 'reports' } 
    ],
},
{
    value: 'ondemandreports',
    label: 'Ondemandreports',
    children: [ ],
},
{
    value: 'manageuser',
    label: 'Manage User',
    children: [
        { value: 'userlist', label: 'User list' } 
    ],
},
{
    value: 'MeterOnboard',
    label: 'Meter Onboard',
    children: [
        { value: 'newmeter', label: 'Add New Meter' } ,
        { value: 'assignmeter', label: 'Assign Meter' } ,
        { value: 'activate', label: 'Activate Meter' } ,
        { value: 'consumer', label: 'Meter Consumer' } ,
        { value: 'bulk', label: 'Bulk Upload' } 
    ],
}
];


const handleSubmit = (event: any) => {    
            
    
  }

class RolePermissionMap extends React.Component {
    state = {
        checked: [],
        expanded: [],
    };

    render() {
        return (
            <div className="p-grid p-fluid">
            <div className="p-col-12">
            <div className="p-messages p-component p-messages-success" style={{margin: '0 0 1em 0', display: 'block'}}>
                <div className="p-messages-wrapper">
                    <span className="p-messages-icon pi pi-fw pi-2x pi-check"></span>
                    <ul>
                        <li>
                            <span className="p-messages-detail">Role Permission Mapping for Role AE... 
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card card-w-title">
                <div className="p-grid"> 
               
            <div className="p-col-12 p-md-12">
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
            </div>
            <div className="p-col-12 p-md-2">
            <Button label="Assign" icon="pi pi-save" onClick={handleSubmit} />
            </div>
            </div>
            </div>

             
        </div>
       
</div>
        );
    }
}
const mapStateToProps = (state: any) => {
    const { deviceFormData } = state;
    return {
      deviceFormData
    };
  };
export default connect(mapStateToProps)(RolePermissionMap)