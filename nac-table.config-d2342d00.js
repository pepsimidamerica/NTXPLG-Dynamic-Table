const config = {
  controlName: 'Dynamic Table',
  description: 'Editable Table for NAC',
  groupName: 'Custom PMA Controls',
  fallbackDisableSubmit: false,
  standardProperties: {
    readOnly: false,
    required: false,
    description: true
  },
  version: '1.0',
  properties: {
    collection: {
      type: 'string',
      title: 'JSONData to be surfaced or displayed'
    },
    value: {
      type: 'string',
      title: 'updatedJson',
      isValueField: true
    }
  }
};

export { config };
