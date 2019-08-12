import { PrimaryGeneratedColumn } from 'typeorm';

//
// A surrogate key is any column or set of columns that can be declared as the primary key instead of a "real" or
// natural key. Sometimes there can be several natural keys that could be declared as the primary key, and these
// are all called candidate keys. So a surrogate is a candidate key.
//

export abstract class Party {

  @PrimaryGeneratedColumn()
  id: number;

  //
  // MongoDB
  // See: https://typeorm.io/#/mongodb
  //

  // @PrimaryGeneratedColumn('uuid')
  // id: string;

}

// import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

// https://github.com/typeorm/typeorm/blob/master/docs/decorator-reference.md

/*

  // @PrimaryColumn()

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  // @VersionColumn

*/