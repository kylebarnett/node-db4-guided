# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be used for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

### Tables:
- Animals, Species, Zoos

### Relationships:
- Animals (many) and Species (one)
  - All animals belong to a single species
  - One to many relationship
- Zoos and Animals
  - many to many
  - many zoos and animals could live in different zoos throughout its life

### Table Details:

zoos:
  - id
  - zoo_name
  - address

species:
  - id
  - species_name

animals:
  - id
  - name
  - species_id


zoo_animals:
  - zoo_id
  - animal_id

