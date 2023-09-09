"""added books table

Revision ID: 34898feb1226
Revises: dda0df91a903
Create Date: 2023-09-09 15:31:22.224276

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '34898feb1226'
down_revision = 'dda0df91a903'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('books',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('author', sa.String(), nullable=True),
    sa.Column('shelf_number', sa.String(), nullable=True),
    sa.Column('description', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('books')
    # ### end Alembic commands ###
