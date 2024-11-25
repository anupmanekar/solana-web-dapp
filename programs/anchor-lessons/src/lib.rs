use anchor_lang::prelude::*;

declare_id!("7QpTNRsu5Cm6ZDSWofgw25D2dfPZHvK7SsJCDbq84pjw");

#[program]
pub mod anchor_lessons {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        ctx.accounts.new_account.data = 42;
        msg!("Data: {:?}", ctx.accounts.new_account.data);
        Ok(())
    }

    pub fn init_phi(ctx: Context<InitPHI>, height: u64, weight: u64, age: u64) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        ctx.accounts.phi_data.height = height;
        ctx.accounts.phi_data.weight = weight;
        ctx.accounts.phi_data.age = age;
        Ok(())
    }

    pub fn display_phi(ctx: Context<DisplayPHI>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        msg!("Height: {:?}", ctx.accounts.phi_data.height);
        msg!("Weight: {:?}", ctx.accounts.phi_data.weight);
        msg!("Age: {:?}", ctx.accounts.phi_data.age);
        Ok(())
    }
}

#[account]
#[derive(Default)]
pub struct MyData {
    pub data: u64,
}

#[account]
#[derive(Default)]
pub struct MyPHIData {
    pub height: u64,
    pub weight: u64,
    pub age: u64,
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = signer, space = 8 + 8)]
    pub new_account: Account<'info, MyData>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct InitPHI<'info> {
    #[account(init, payer = signer, space = 8 + 8 + 8 + 8)]
    pub phi_data: Account<'info, MyPHIData>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct DisplayPHI<'info> {
    #[account(init_if_needed, payer = signer, space = 8 + 8 + 8 + 8)]
    pub phi_data: Account<'info, MyPHIData>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}
