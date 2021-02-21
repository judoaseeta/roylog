import React, { ReactSVG } from 'react';
import TechStacks from '../techStacks';
import { propNames } from './';
import styles from '../../styles/Portfolio.module.css';


const TableItemLayOut: React.FC<{
    name: string | React.ReactNode ;
}> =({ name, children}) => 
<tr
    className={styles.tableItem}
>
        <th className={styles.tableHead}>{name}</th>
        <td className={styles.tableData}>{children}</td>
</tr>;


interface TableItemProps {
    name: string;
    data: string | string[];
}
const TableItem: React.FC<TableItemProps> = ({ name, data}) =>  {
    if(name === 'name') {
        return <TableItemLayOut
            name="이름"
        >
            {data}
        </TableItemLayOut>;  
    } else if(name === 'githubAddress') {
        return <TableItemLayOut
            name={
                <>
                    <TechStacks 
                        className={styles.techStack}
                        stackName="github"    
                    /> Github 주소
                </>
            }
        >
            <a href={data as string} target="_blink">{data}</a>
        </TableItemLayOut>
    } else if(name === "hostedAddress") {
        return <TableItemLayOut name="호스팅 주소">{data}</TableItemLayOut>;  
    } else if(name === "stacks") {
        return <TableItemLayOut
            name="테크 스택"
        >
            {
                <>
                    {Array.isArray(data) && data.map( d => 
                        <TechStacks 
                            className={styles.techStack}
                            stackName={d}
                            key={d}
                        />    
                    )}
                </>
            }
        </TableItemLayOut>
    } else {
        return <TableItemLayOut 
            name={
                <>
                    <TechStacks 
                        className={styles.techStack}
                        stackName="npm"    
                    />
                    NPM 주소
                </>
            }
        >
            {data === '""' ?  "없음" : data}
        </TableItemLayOut>;  
    }
}

export default TableItem;
