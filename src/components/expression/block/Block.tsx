import * as React from 'react';
import BlockModel from '../../../models/blocks/BaseBlock';

export interface BlockProps { model: BlockModel }

export const Block: React.FunctionComponent<BlockProps> = (props: BlockProps) => {
  const { model } = props;
  return (
    <span className={`expression__block ${model.getClassName()}`}>
      {model.formattedValue()}
    </span>
  );
};