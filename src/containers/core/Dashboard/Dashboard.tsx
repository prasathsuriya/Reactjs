import React, { useState } from 'react';
import { Dispatch } from 'redux';
import * as styles from './Dashboard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import addProjectIcon from '../../../assets/img/add-project.png'
import importIcon from '../../../assets/img/import.png'
import viewMetadataIcon from '../../../assets/img/view-metadata.png'

//import {
//    fetchProjectData,
//    addProject,
//    deleteProject
//} from '../../../store/actions/Projects';
import { connect } from 'react-redux';

interface IDashboardProps {
    dispatch: Dispatch<any>;
    dashboardData: any;
}

const DashboardData: React.SFC<IDashboardProps> = ({
    dispatch,
    dashboardData
}) => {

    React.useEffect(() => {
        //dispatch(fetchProjectData());
    }, []);

    return (
        <div className={styles['container']}>
            <p className={styles['dash-header']}>Welcome to the Mission Digital Metadata Portal!</p><br /><br />
            <div className={styles['flex-grid']}>
                <div className={styles['col']}>
                    <a href="/projects" >
                        <img alt="Projects" src={addProjectIcon} className={styles['dash-img']} />
                    </a>
                    <p className={styles['dash-text-project']}>Projects</p>
                </div>

                <div className={styles['col']}>
                    <a href="/import" >
                        <img alt="Import" src={importIcon} className={styles['dash-img']}/>
                    </a>
                    <p className={styles['dash-text-import']}>Import Data</p>
                </div>

                <div className={styles['col']}>
                    <a href="/viewmetadata" >
                        <img alt="View Metadata" src={viewMetadataIcon} className={styles['dash-img-small']}/>
                    </a>
                    <p className={styles['dash-text-view']}>View Metadata</p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    const { dashboardData } = state;
    return {
        dashboardData,
    };
};

export default connect(mapStateToProps)(DashboardData);
