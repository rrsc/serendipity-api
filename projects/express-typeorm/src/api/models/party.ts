import { Column, Entity, Index, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

import { Address } from './address';
import { Role } from './role';
import { SpecialColumns } from './special-columns';

@Entity('Party')
export class Party {

  @PrimaryGeneratedColumn()
  @Index()
  id: number;

  @IsNotEmpty()
  @Column()
  type: string;  // 'Individual' | 'Organisation'

  @IsNotEmpty()
  @Column()
  displayName: string;

  @Type(() => Address)
  @ManyToMany(type => Address, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinTable({ name: 'PartyAddress' })
  addresses: Address[];

  @Type(() => Role)
  @ManyToMany(type => Role, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinTable({ name: 'PartyRole' })
  roles: Role[];

  @Column(type => SpecialColumns, { prefix: '' })
  specialColumns: SpecialColumns;

  constructor(
      type: string = 'type',
      displayName: string = 'displayName'
  ) {
    this.type = type;
    this.displayName = displayName;

    // https://github.com/typeorm/typeorm/blob/master/docs/relations-faq.md

    // Don't initialize arrays in your entities. Same rule applies to a constructor.

    // this.addresses = [];
    // this.roles = [];
  }

}

// https://github.com/typeorm/typeorm/blob/master/docs/decorator-reference.md

// readonly id: number;
