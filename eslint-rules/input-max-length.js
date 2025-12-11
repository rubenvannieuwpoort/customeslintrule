export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Require maxLength attribute on input elements',
      category: 'Best Practices',
      recommended: false,
    },
    messages: {
      missingMaxLength: 'Input element should have a maxLength attribute',
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        // Check if the element is an 'input'
        if (node.name && node.name.name === 'input') {
          // Check if it has a maxLength attribute
          const hasMaxLength = node.attributes.some(attr => {
            return (
              attr.type === 'JSXAttribute' &&
              attr.name &&
              attr.name.name === 'maxLength'
            );
          });

          if (!hasMaxLength) {
            context.report({
              node,
              messageId: 'missingMaxLength',
            });
          }
        }
      },
    };
  },
};
