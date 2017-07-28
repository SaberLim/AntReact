import React from 'react';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

var TreeView = React.createClass(
    {
        render(){
            const  loop = data=>data.map(item)
                {
                    if(item.children){
                     return( <TreeNode> {loop(item.children)} </TreeNode>)
                    }    
                    return <TreeNode key={item.key} title={item.key} >哈哈哈2</TreeNode>
                }
            return(
                <div>
                    <Tree>{loop(this.props.TreeData)}</Tree>
                </div>
            );
        }
    }
)


