function main(params) {
  if (params.name) {
    return { greeting: `Hello ${params.name}` };
  }
  return { greeting: 'Hello stranger!' };
}

exports.main = main;
