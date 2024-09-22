import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  NONCE_ACCOUNT_LENGTH,
  NonceAccount,
  PublicKey,
  sendAndConfirmRawTransaction,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';
import { initializeKeypair, makeKeypairs } from '@solana-developers/helpers';
import base58 from 'bs58';
import { assert } from 'chai';
import dotenv from 'dotenv';
dotenv.config();

const LOCALHOST_RPC_URL = 'http://localhost:8899';
const CONFIRMATION_COMMITMENT = 'confirmed';

const connection = new Connection(LOCALHOST_RPC_URL, CONFIRMATION_COMMITMENT);

describe('Durable Nonce Transactions', () => {
  it('creates and submits a durable transaction successfully', async () => {
    // Implementation will be added later
  });

  it('fails when attempting to use an advanced nonce', async () => {
    // Implementation will be added later
  });

  it('advances the nonce account even when the transaction fails', async () => {
    // Implementation will be added later
  });

  it('does not advance the nonce account when the nonce authority fails to sign', async () => {
    // Implementation will be added later
  });

  it('submits successfully after changing the nonce authority to a pre-signed address', async () => {
    // Implementation will be added later
  });
});
